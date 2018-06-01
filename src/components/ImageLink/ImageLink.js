const ImageLink = ({ alt, src, ...rest }) => (
  <a target="_blank" rel="noopener noreferrer" aria-label={alt} {...rest}>
    <img src={src} alt={alt} />
  </a>
)

export default ImageLink
