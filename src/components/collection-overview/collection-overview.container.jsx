import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionOverview from './collection-overview.component';
import { selectCollectionIsLoading } from '../../redux/shop/shop.selectors';

const mapStateToProps = createStructuredSelector({
  isLoading: selectCollectionIsLoading
});

const CollectionOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionOverview));

export default CollectionOverviewContainer;