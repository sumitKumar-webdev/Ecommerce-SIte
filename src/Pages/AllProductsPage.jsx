import React from 'react'
import { CategorySection } from '../Component/CategorySection'
import Container from '../Component/Container/Container'
import { useParams } from 'react-router-dom'


export const AllProductsPage = () => {
  const {category} = useParams();
  const title = " T-Shirts"
  return(
    <Container>
      <div className='min-h-svh'>
    <CategorySection
    sectionTitle={category+title}
    Category={category}
    limit={'5'}
    button={false} />
    </div>
    </Container>
   )
  }
