var ComponentRenderMixin = {
  shouldComponentUpdate: function(nextProps, nextState) {
    return !shallowEqualProps(this.props, nextProps) ||
           !shallowEqual(this.state, nextState);
  }
};
