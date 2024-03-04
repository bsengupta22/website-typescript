import React from 'react'

type Props = {
    imgpath: string;
    imgdescription: string;
    alt: string;

}

const ImageWithCaption = (props: Props) => {
  return (
    <div className="text-center">
    <img
      src={props.imgpath}
      alt={props.alt}
      className="w-[100px] mx-auto"
    />
    <text>{props.imgdescription}</text>
  </div>
  )
}

export default ImageWithCaption