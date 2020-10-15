import React, { FC, useState, useCallback } from 'react';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import KeywordSearch from '../UIparts/KeywordSearch';
import { headerProps } from '../types/props';

const HeaderMenu: FC<headerProps> = (props) => {

    const [keyword, setKeyword] = useState('');

    const inputKeyword = useCallback((event: React.ChangeEvent<HTMLInputElement>): void => {
        setKeyword(event.currentTarget.value)
    },[setKeyword])

    const keywordSearchProps = {
        fullWidth: false,
        label: "キーワード入力",
        multiline: false,
        required: false,
        rows: 1,
        value: keyword, 
        type: "text",
        onChange: inputKeyword,
    }

    return(
        <div>
            <KeywordSearch item={keywordSearchProps} />
            <IconButton>
                <SearchIcon />
            </IconButton>
            <IconButton>
                <MenuIcon />
            </IconButton>
        </div>
    )
};

export default HeaderMenu;