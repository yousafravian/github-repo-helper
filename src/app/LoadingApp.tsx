import React from 'react'
import Lottie from 'react-lottie-player'
import lottieJson from '../assets/loading-animation.json';

export default function LoadingApp() {
    return (
        <div className='h-[100vh] flex justify-center items-center'>
            <Lottie
                loop
                animationData={lottieJson}
                play
                style={{ width: 300, height: 300 }}
            />
        </div>
    )
}