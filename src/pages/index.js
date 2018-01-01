import React from 'react'
//import P5Wrapper from 'react-p5-wrapper'

const IndexPage = () => (
  <div className='home'>
    {/* <P5Wrapper sketch={sketch} /> */}
  </div>
)

export default IndexPage


// function sketch(p) {
//   var cols, rows
//   var scl = 100
//   var t = 0

//   p.setup = () => {
//     p.createCanvas(100, 100);
//     cols = p.ceil(p.width / scl)
//     rows = p.ceil(p.height / scl)
//     p.rectMode(p.CENTER)
//   }

//   p.draw = () => {
//     p.background(0, 10)
//     p.stroke(255)
//     p.noFill()
//     p.translate(p.width / 2, p.height / 2)
//     for (var i = 0; i < 10; i++) {
//       p.rotate(p.PI / 4)
//       hatch()
//       p.rotate(p.PI / 4)
//     }
//     t += 0.01
//   }


//   function hatch() {
//     for (var y = 0; y < rows; y++) {
//       for (var x = 0; x < cols; x++) {
//         p.push()
//         p.translate(x * scl, y * scl)
//         p.rotate(t)
//         p.rect(0, 0, 1 * scl, 1 * scl)
//         p.pop()
//       }
//     }
//   }
// };