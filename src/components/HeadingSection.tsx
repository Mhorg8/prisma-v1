import React from 'react';

const HeadingSection = ({title}: { title: string }) => {
    return (
        <h2 className="text-2xl font-semibold text-darkBlue underline">{title}</h2>
    );
};

export default HeadingSection;