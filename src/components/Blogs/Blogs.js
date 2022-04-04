import React from 'react';

const Blogs = () => {
    return (
        <div className='container mt-5'>
            <div>
            <h3>what is context api?</h3>
            <p>The Context API is a React structure that lets you share unique details and helps you solve prop-drilling problems at various levels of your project.The Context API allows you to construct global variables that you may pass around the component tree. Context API is a replacement for manually passing props in a component tree. Proper drilling is another name for it.</p>
            </div>
            <div>
                <h3>what is semantic tag?</h3>
                <p>Semantic HTML tags give information about the contents of those tags that goes beyond just how they look on a page. The browser recognizes text encased in the code tag as some kind of coding language right away.Examples of semantic elements: form , table , and article etc.</p>
            </div>
            <div>
                <h3>Block inline and inline-block elements difference.</h3>
                <p>inline-block It's formatted similarly to the inline element, with the exception that it doesn't begin on a new line. Other hand A block-level element always begins on a new line and occupies the entire available width. The main difference between inline and inline-block is that inline-block allows you to specify the element's width and height. Also, top and bottom margins and paddings are ignored with display: inline, but they are respected with display: inline-block.</p>
            </div>
        </div>
    );
};

export default Blogs;