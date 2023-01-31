// Imports
// React imports
import React from 'react'

// Asset imports
import heroImage from '../../assets/services/website_hero.jpg'
import bubbleImage from '../../assets/services/sara.jpg'
import bubbleResume from '../../assets/services/bubble-resume.jpg'
import { HiOutlineArrowCircleDown } from 'react-icons/hi'

function Chat() {
  return (
    <div>
      {/* Bubble #1 Left */}
      <div className="chat chat-start mt-24">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src={bubbleImage} className="dark:opacity-80" />
          </div>
        </div>
        <div className="chat-header">
          Sara
          <time className="text-xs opacity-50 ml-2">12:45</time>
        </div>
        <div className="chat-bubble bg-skin-bubble-left text-skin-font-light shadow-sm sm:rounded-full dark:opacity-90 dark:shadow-none">
          Hi Patrick! Are you currently available for hire?
        </div>
        <div className="chat-footer opacity-50">Delivered</div>
      </div>
      {/* Bubble #1 Right */}
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src={heroImage} className="dark:opacity-80" />
          </div>
        </div>
        <div className="chat-header">
          Patrick
          <time className="text-xs opacity-50 ml-2">12:46</time>
        </div>
        <div className="chat-bubble bg-skin-bubble-right text-skin-font-dark shadow-sm sm:rounded-full dark:opacity-90 dark:shadow-none">
          Hey Sara. Thanks so much for getting in touch. Yes! I am currently
          available, looking for a full-time remote fullstack or frontend
          developer role :)
        </div>
        <div className="chat-footer opacity-50">Seen at 12:46</div>
      </div>
      {/* Bubble #2 Left */}
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src={bubbleImage} className="dark:opacity-80" />
          </div>
        </div>
        <div className="chat-header">
          Sara
          <time className="text-xs opacity-50 ml-2">12:47</time>
        </div>
        <div className="chat-bubble bg-skin-bubble-left text-skin-font-light shadow-sm sm:rounded-full dark:opacity-90 dark:shadow-none">
          That's perfect. Shall we have a chat?
        </div>
        <div className="chat-footer opacity-50">Delivered</div>
      </div>
      {/* Bubble #2 Right */}
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src={heroImage} className="dark:opacity-80" />
          </div>
        </div>
        <div className="chat-header">
          Patrick
          <time className="text-xs opacity-50 ml-2">12:48</time>
        </div>
        <div className="chat-bubble bg-skin-bubble-right text-skin-font-dark shadow-sm sm:rounded-full dark:opacity-90 dark:shadow-none">
          I'd love too! Here is my CV.
        </div>
        <div className="chat-footer opacity-50">Seen at 12:48</div>
      </div>
      {/* Bubble #3 Right */}
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src={heroImage} className="dark:opacity-80" />
          </div>
        </div>
        <div className="chat-header">
          Patrick
          <time className="text-xs opacity-50 ml-2">12:48</time>
        </div>
        <div className="grid grid-cols-2 px-8 chat-bubble bg-skin-bubble-right text-skin-font-dark shadow-sm dark:opacity-90 dark:shadow-none">
          <img
            src={bubbleResume}
            className="w-8 rounded-sm shadow-sm col-span-1"
            alt=""
          />
          <a
            href="https://drive.google.com/file/d/1Ovw69PxHUIyMPKgRo_AS0sefaIw9kgaU/view"
            className="link col-span-1"
            target="_blank"
          >
            <div className="mt-2 grid grid-cols-2 xs:gap-2 justify-center items-center">
              <HiOutlineArrowCircleDown className="text-[1.7rem]" />
              <p className="text-sm">Download</p>
            </div>
          </a>
          <p className="col-span-2">Patrick Lemmer Resume</p>
          <p className="text-[0.65rem] col-span-2">PDF Document - 72 KB</p>
        </div>
        <div className="chat-footer opacity-50">Seen at 12:48</div>
      </div>
      {/* Bubble #3 Left */}
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src={bubbleImage} className="dark:opacity-80" />
          </div>
        </div>
        <div className="chat-header">
          Sara
          <time className="text-xs opacity-50 ml-2">12:49</time>
        </div>
        <div className="chat-bubble bg-skin-bubble-left text-skin-font-light shadow-sm sm:rounded-full dark:opacity-90 dark:shadow-none">
          Awesome! I appreciate that! How about a phone call at 3pm tomorrow?
        </div>
        <div className="chat-footer opacity-50">Delivered</div>
      </div>
      {/* Bubble #4 Right */}
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src={heroImage} className="dark:opacity-80" />
          </div>
        </div>
        <div className="chat-header">
          Patrick
          <time className="text-xs opacity-50 ml-2">12:49</time>
        </div>
        <div className="chat-bubble bg-skin-bubble-right text-skin-font-dark shadow-sm sm:rounded-full dark:opacity-90 dark:shadow-none">
          Sounds like a plan! Looking forward to it.
        </div>
        <div className="chat-footer opacity-50">Seen at 12:49</div>
      </div>
    </div>
  )
}

export default Chat
