import React from 'react';

const CreatePost = () => {
    return (
        <div className=' grid grid-cols-12 gap-4 items-center'>
            <img className='h-12 w-12 rounded-full object-cover' src="https://img.freepik.com/free-photo/close-up-shot-confident-strict-businessman-has-thick-bristle-looks-with-gloomy-expression-frowns-face_273609-18631.jpg?w=2000" alt="" />
            <textarea className='w-full h-12 justify-center col-span-11 ' placeholder="What's occupying your thoughts, Raihan?"  name="" id="" cols={30} rows={10}></textarea>
        </div>
    );
};

export default CreatePost;
