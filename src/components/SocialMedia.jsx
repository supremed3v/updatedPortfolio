import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import {FaReddit} from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <a href="https://www.linkedin.com/in/saad-siddiqui-developer/" target="_blank" rel='noreferrer' >
            <BsLinkedin />
            </a>
        </div>
        <div>
            <a href="https://github.com/supremed3v" target="_blank" rel='noreferrer' >
            <BsGithub/>
            </a>
        </div>
        <div>
            <a href="https://www.reddit.com/user/supremed3v" target="_blank" rel='noreferrer' >
            <FaReddit/>
            </a>
        </div>
        </div>
  )
}

export default SocialMedia