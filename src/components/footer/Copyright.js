import React from 'react';

const Copyright = ({className}) => {
    return (
        <p className={className ? className : ''}>
            © {new Date().getFullYear()} Brook. Made with <i className="fa fa-heart text-danger"/> by <a href="//hasthemes.com" target="_blank" rel="noopener noreferrer">HasThemes.</a>
        </p>
    );
};

export default Copyright;
