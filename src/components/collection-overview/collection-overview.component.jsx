import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionToPreview } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../collection-overview/collection-overview.component';

import { CollectionOverviewContainer } from './collection-overview.styles';

const CollectionOverview = ({ collections }) => (
    <CollectionOverviewContainer>
        {collections.map(({ id, ...otherCollections }) => (
        <CollectionPreview key={id} {...otherCollections} />
      ))}
    </CollectionOverviewContainer>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionToPreview
});

export default connect(mapStateToProps)(CollectionOverview);
