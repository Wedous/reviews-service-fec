import React from 'react'
import { Rating } from 'semantic-ui-react'

const Stars = ({stars}) => <Rating icon='star' defaultRating={stars} maxRating={5} disabled />

export default Stars