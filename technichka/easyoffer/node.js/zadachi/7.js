Нужно изменить данный код так, что бы время обновлялось каждую секунду

import React from 'react'

class Clock extends React.Component<any, any> {
  constructor(props) {
    super(props)
    this.state = { date: new Date() }
  }

  componentDidMount() {
    setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount() {
    clearInterval()
  }

  tick() {
    // @ts-ignore
    this.state.date = new Date()
  }

  render() {
    return (
      <div>
        <h1>Привет, мир!</h1>
        <h2>Сейчас {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}