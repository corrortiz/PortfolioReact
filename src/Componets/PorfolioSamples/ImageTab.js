import React from 'react';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import FontIcon from 'material-ui/FontIcon';

const styles = {
    chip: {
        margin: 4,
    }
};

const ImageTab = ({nombreAdento}) => (
    <Chip
        style={styles.chip}
    >
        <Avatar className="light-blue darken-4" icon={<FontIcon className="material-icons">favorite_border</FontIcon>} />
        <p className="light-blue-text text-darken-4">{nombreAdento}</p>
    </Chip>
);

export default ImageTab;