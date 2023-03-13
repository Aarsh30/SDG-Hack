import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/13.png'
const AboutPage = () => {
  return (
    <main>
      <PageHero title='about' />
      <Wrapper className='page section section-center'>
        <img src={aboutImg} alt='food image' />
        <article>
          <div className='title'>
            <h2>our story</h2>
            <div className='underline'></div>
          </div>
          <p>
          Our organic food items are carefully grown, harvested, and delivered to your doorstep.
           Taste the difference of fresh, pesticide-free produce and support sustainable farming practices with every purchase.
          </p>
          <p>
          Our commitment to providing the freshest organic food items begins with our dedicated farmers who use sustainable and natural farming practices. From there, our produce is carefully harvested, hand-selected, 
          and delivered straight to your doorstep, ensuring that you receive only the best quality, pesticide-free fruits and vegetables.
          </p>
        </article>
      </Wrapper>
    </main>
  )
}
const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
