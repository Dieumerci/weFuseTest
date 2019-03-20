import React, { Component } from 'react';
import Plx from 'react-plx';

// An array of parallax effects to be applied - see below for detail
const parallaxData = [
//   {
//     start: 0,
//     end: 500,
//     properties: [
//       {
//         startValue: 1,
//         endValue: 2,
//         property: 'scale',
//       },
//     ],
//   },
{
    start: 0,
    duration: 500,
    properties: [
      {
        startValue: 1,
        endValue: 2,
        property: "scale"
      },
      {
        startValue: 1,
        endValue: 2,
        property: "translateY"
      },
      {
        startValue: 0.85,
        endValue: 2,
        property: "opacity"
      }
    ]
  },
];

class Example extends Component {
  render() {
    return (
      <Plx
        className='MyAwesomeParallax'
        parallaxData={ parallaxData }
      >
            <section class="jumbotron text-center">
    <div class="container">
    <h1 class="jumbotron-heading">UX Design</h1>
      <p class="lead text-muted">Simplicity is everything when it comes to great UX. As Albert Einstein famously said, “Any darn fool can make something complex; it takes a genius to make something simple.</p>

    </div>
  </section>
      </Plx>
    );
  }
}

export default Example;