import './index.scss'

// Inline-block letters collapse plain spaces, so word gaps are rendered as
// non-breaking spaces instead.
const NBSP = ' '

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  return (
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {char === ' ' ? NBSP : char}
        </span>
      ))}
    </span>
  )
}

export default AnimatedLetters
