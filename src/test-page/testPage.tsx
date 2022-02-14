import React from 'react';
import SuperInputText from "../commonComponents/SuperInputText/SuperInputText";
import SuperButton from "../commonComponents/SuperButton/SuperButton";
import SuperCheckbox from "../commonComponents/SuperCheckbox/SuperCheckbox";

const TestPage = () => {
    return (
        <div>
            <h2>Test page</h2>
            <SuperInputText/>
            <SuperButton>Test</SuperButton>
            <SuperCheckbox/>
        </div>
    );
};

export default TestPage;
