import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import {FaReddit} from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <BsLinkedin/>
        </div>
        <div>
            <BsGithub/>
        </div>
        <div>
            <FaReddit/>
        </div>
        </div>
  )
}

export default SocialMedia