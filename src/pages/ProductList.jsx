import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/navbar/Navbar'
import Newsletter from '../components/news/Newsletter'
import Products from '../components/products/Products'

const Component = styled.div`

`
const Title = styled.h1`
    margin: 20px;
`
const FilterContainer = styled.div`
    diplay: flex;
    justify-content: space-between;

`
const Filter = styled.div`
    margin: 20px;
`

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`

const ProductList = () => {
  return (
    <Container>
        <Navbar/>
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>
                <FilterText>
                    Filter Products:
                </FilterText>
                <Select>
                    <Option disabled selected>
                        Color
                    </Option>
                    <Option>Black</Option>
                    <Option>White</Option>
                    <Option>Yellow</Option>
                </Select>
                <Select>
                    <Option disabled selected>
                        Size
                    </Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>
                    Sort Products:
                </FilterText>
                <Select>
                    <Option selected>
                        Newest
                    </Option>
                    <Option>Price (asc)</Option>
                    <Option>Price (desc)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList