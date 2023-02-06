import {ListCont, ImageUrl, Heading, Description} from './styledComponents'

const TourList = props => {
  const {packages} = props
  const {name, imageUrl, description} = packages
  return (
    <ListCont>
      <ImageUrl src={imageUrl} alt={name} />
      <Heading>{name}</Heading>
      <Description>{description}</Description>
    </ListCont>
  )
}
export default TourList
