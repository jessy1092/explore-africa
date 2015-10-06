import React        from 'react/addons';
import IndexMenu    from '../components/IndexMenu';
import IndexSection from '../components/IndexSection';
import RouteStore   from '../stores/RouteStore';

export default React.createClass({

  getInitialState() {
    return {
      category: RouteStore.getCurrentRoute().params.category || 'news'
    };
  },

  render() {
    let {category} = this.state;
    console.log(category);
    // let {category} = this.props;
    // let {posts = []} = this.state.postList[category];
    return (
      <div>
        <div>
          <IndexMenu hide={false} />
        </div>
        <div className="container-content">
          <IndexSection category={category} title={category}/>
        </div>
      </div>
    );
  },

  _onChange() {
    this.setState({
      category: RouteStore.getCurrentRoute().params.category || 'news'
    });
  }
});
