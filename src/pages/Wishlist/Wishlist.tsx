import React, {FunctionComponent, memo} from 'react';
import Page from "../../shared/components/Page/Page";
import MainGrid from "../../shared/components/MainGrid/MainGrid";
import {useAppSelector} from "../../hooks/redux";
import {filteredPhonesSelector} from "../../store/selectors";



const Wishlist: FunctionComponent = () => {
  const { wishList } = useAppSelector(filteredPhonesSelector)
    return (
        <Page title={"Wishlist"}>
           <MainGrid phones={wishList}/>
        </Page>
    );
};

export default memo(Wishlist);