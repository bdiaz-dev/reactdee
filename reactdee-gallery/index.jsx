/* eslint-disable react/prop-types */
'use client'

import { useEffect, useState } from 'react'
import moduleStyles from './style.module.css'

export default function Gallery ({
  images = [
    {
      alt: 'image1',
      title: 'author: Ben Moore',
      src: 'https://picsum.photos/id/102/4320/3240'
    },
    {
      alt: 'image2',
      title: 'author: Ilham Rahmansyah',
      src: 'https://picsum.photos/id/103/2592/1936'
    },
    {
      alt: 'image3',
      title: 'author: Dyaa Eldin',
      src: 'https://picsum.photos/id/104/3840/2160'
    },
    {
      alt: 'image4',
      title: 'author: Arvee Marie',
      src: 'https://picsum.photos/id/106/2592/1728'
    },
    {
      alt: 'image5',
      title: 'author: Lukas Schweizer',
      src: 'https://picsum.photos/id/107/5000/3333'
    },
    {
      alt: 'image6',
      title: 'author: Florian Klauer',
      src: 'https://picsum.photos/id/108/2000/1333'
    }
  ]
}) {
  const [seeImg, SetSeeImg] = useState(0)
  const [isModal, setIsModal] = useState(false)
  useEffect(() => {
    document.querySelector('body').style.overflow = (isModal)
      ? 'hidden'
      : 'auto'
  }, [isModal])
  const closeModal = (e) => {
    e.target.parentElement.style.opacity = '0'
    setTimeout(() => {
      setIsModal(false)
    }, 250)
  }

  return (
    <div className={moduleStyles.gallery}>
      <div className={moduleStyles.previewContainer}>
        <img
          className={moduleStyles.preview}
          src={images[seeImg].src}
          alt={images[seeImg].alt}
          title={images[seeImg].title}
          onClick={() => { setIsModal(true) }}
        />
      </div>
      <div>
        <ul className={moduleStyles.thubnailsContainer}>
          {
            images.map((img, index) => {
              return (
                <li key={img.alt}>
                  <img
                    src={img.src}
                    className={moduleStyles.thubnail}
                    alt={img.alt}
                    title={img.title}
                    onClick={() => { SetSeeImg(index) }}
                  />
                </li>
              )
            })
          }
        </ul>
      </div>
      {isModal &&
        <div className={moduleStyles.modalView}>
          <img
            className={moduleStyles.modalCloseButton}
            src='https://www.svgrepo.com/show/486594/close-small.svg'
            // onClick={() => { setIsModal(false) }}
            onClick={(e) => { closeModal(e) }}
          />
          <div className={moduleStyles.modalImgContainer}>
            <div className={moduleStyles.modalArrowsContainer}>
              <div
                className={moduleStyles.modalArrowsSideContainer}
              >
                {(seeImg <= 0) ||
                  <img
                    src='https://www.svgrepo.com/show/370955/back.svg'
                    className={moduleStyles.modalArrow}
                    onClick={() => { SetSeeImg(seeImg - 1) }}
                  />}
              </div>
              <div
                className={moduleStyles.modalArrowsSideContainer}
              >
                {(seeImg >= (images.length - 1)) ||
                  <img
                    src='https://www.svgrepo.com/show/370998/next.svg'
                    className={moduleStyles.modalArrow}
                    onClick={() => { SetSeeImg(seeImg + 1) }}
                  />}
              </div>
            </div>

            <img
              src={images[seeImg].src}
              className={moduleStyles.modalImg}
              alt={images[seeImg].alt}
              title={images[seeImg].title}
            />
          </div>
        </div>}
    </div>
  )
}
