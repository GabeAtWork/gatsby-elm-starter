import React from "react"
import PropTypes from "prop-types"

class ElmHandler extends React.Component {
  node = React.createRef()

  componentDidMount() {
    this.app = this.props.src.init({
      node: this.node.current,
      flags: this.props.flags.getOrElse(null),
    })

    if (this.props.ports) {
      this.ports = this.props.ports(this.app.ports)
    }
  }

  shouldComponentUpdate(nextProps) {
    if (this.ports) {
      this.ports(nextProps)
    }
    return false
  }

  render() {
    return <div ref={this.node} />
  }
}

ElmHandler.propTypes = {
  flags: PropTypes.object,
  ports: PropTypes.func,
  src: PropTypes.object.isRequired,
}

export default ElmHandler
