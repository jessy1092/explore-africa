import React               from 'react';
import PostListConfig      from '../../configures/PostListConfig';
import PostListStore       from '../../stores/PostListStore';
import RouteAction         from '../../actions/RouteAction';
import TumblrConfig        from '../../configures/TumblrConfig';
import PostGrid            from '../PostGrid';

export default React.createClass({

  getInitialState() {
    return {
      listCon: PostListStore.getListContainer(this.props.category),
      moreButtonLoading: false
    };
  },

  componentDidMount() {
    this.addChangeListener(this.props.category);
  },

  componentWillUnmount() {
    this.removeCurrentChangeListener();
  },

  componentWillReceiveProps(nextProps) {
    if (this.props.category !== nextProps) {
      this.removeCurrentChangeListener();
      this.addChangeListener(nextProps.category);
    }
    this.setState({
      listCon: PostListStore.getListContainer(this.props.category),
      moreButtonLoading: false
    });
  },

  addChangeListener(category) {
    if (category === 'new') {
      PostListStore.addChangeListener('new', this._onChange);
    } else {
      PostListStore.addChangeListener('category', this._onChange);
    }
  },

  removeCurrentChangeListener() {
    if (this.props.category == 'new') {
      PostListStore.removeChangeListener('new', this._onChange);
    } else {
      PostListStore.removeChangeListener('category', this._onChange);
    }
  },

  render() {
    let moreButton = false;
    let {listCon, moreButtonLoading} = this.state;
    if (listCon.parsedPostNum < listCon.totalPostNum) {
      moreButton = true;
    }

    let title = '';
    if (this.props.category === 'new') {
      title = '最新文章';
    } else {
      title = PostListConfig.categoryMap[this.props.title];
    }

    return (
      <PostGrid
        title={title}
        posts={listCon.posts}
        moreButton={moreButton}
        moreButtonLoading={moreButtonLoading}
        onPostGridClick={this._onClick}
        onMorePostClick={this._onLoadMoreClick}/>
    );
  },

  _onChange() {
    this.setState({
      listCon: PostListStore.getListContainer(this.props.category),
      moreButtonLoading: false
    });
  },

  _onClick(e) {
    let {pathname, hash} = e.currentTarget;
    history.pushState({pathname: pathname, hash: hash}, '', pathname);
    RouteAction.updatePath(pathname, hash);
    e.preventDefault();
  },

  _onLoadMoreClick(e) {
    e.preventDefault();
    this.setState({moreButtonLoading: true});
    PostListStore.loadMorePosts(this.props.category, TumblrConfig.postList.loadAmount);
  }
});
