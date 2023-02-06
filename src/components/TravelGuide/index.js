import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TourList from '../TourList'
import {
  MainCont,
  MainHeading,
  UnorderList,
  LoaderCont,
} from './styledComponents'

class TravelGuide extends Component {
  state = {packagesLst: [], isLoading: true}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const url = 'https://apis.ccbp.in/tg/packages'
    const options = {
      method: 'GET',
    }
    const fetchedData = await fetch(url, options)
    if (fetchedData.ok === true) {
      const response = await fetchedData.json()
      const data = response.packages.map(each => ({
        id: each.id,
        name: each.name,
        imageUrl: each.image_url,
        description: each.description,
      }))
      this.setState({isLoading: false, packagesLst: data})
      // console.log(data)
    }
  }

  renderTravelGuide = () => {
    const {packagesLst} = this.state
    return (
      <UnorderList>
        {packagesLst.map(packages => (
          <TourList packages={packages} key={packages.id} />
        ))}
      </UnorderList>
    )
  }

  renderLoader = () => (
    <LoaderCont data-testid="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </LoaderCont>
  )

  render() {
    const {isLoading} = this.state
    // console.log(packagesLst)
    return (
      <MainCont>
        <MainHeading>Travel Guide</MainHeading>
        {isLoading ? this.renderLoader() : this.renderTravelGuide()}
      </MainCont>
    )
  }
}
export default TravelGuide
