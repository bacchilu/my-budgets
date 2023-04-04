import React from 'react';

import {version} from '../../package.json';

export const Version: React.FC = () => {
    return <span>{version}</span>;
};
