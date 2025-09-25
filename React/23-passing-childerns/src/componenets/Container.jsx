function Container(props) {
  return (
    <div>
      {props.children}
    </div>
  )
}

// Using Destructing
// function Container({children, xyz1, xyz2}) { We can accept multiples props along with child props
//   return (
//     <div>
//       {children}
//     </div>
//   )
// }

export default Container
// We can pass any children(tags, elements, components, etc(child props)) inside Container, It provided little abstraction cause parent don't know which ty\pe of children it's containing
// Container containing child props and child props are main concept not container(it's just a component that containing child props)