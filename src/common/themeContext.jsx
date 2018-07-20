import React from 'react';

const themeContext = React.createContext()

export const ThemeConsumer = themeContext.Consumer

const themes = [
  {
    bg: '#000000',
    fg: '#ffff',
    link: '#85BE39',
    meta: '#6f6f6f',
    bodyBG: '#E8E8E8'
  },
  {
    bg: '#000000',
    fg: '#ffff',
    link: '#93CFEF',
    meta: '#6f6f6f',
    bodyBG: '#E8E8E8'
  },
  {
    bg: '#EE6F2E',
    fg: '#ffff',
    link: '#000000',
    meta: '#6f6f6f',
    bodyBG: '#E8E8E8'
  },
  {
    bg: '#000000',
    fg: '#ffff',
    link: '#ffff',
    meta: '#6f6f6f',
    bodyBG: '#000000'
  }
];

export class ThemeProvider extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      bg: '#000000',
      fg: '#ffff',
      link: '#85BE39',
      meta: '#6f6f6f',
      bodyBG: '#E8E8E8'
    }
    this.changeTheme = this.changeTheme.bind(this);
    this.getThemes = this.getThemes.bind(this);
    this.themes = this.getThemes()
  }

  changeTheme(){
    this.setState({...this.themes.next().value}, () => {
      window.localStorage.setItem('theme', JSON.stringify(this.state))
    })
  }

  componentDidMount() {
    const theme = JSON.parse(window.localStorage.getItem('theme'))
    this.setState({...theme})
  }

  componentWillReceiveProps(nextProps){
    if (this.props.theme != nextProps.theme) {
      this.setState({...nextProps.theme})
    }
  }

  *getThemes(){
    let counter = 0;

    while (true) {
      if (counter > themes.length - 1) {
        counter = 0;
      }
      yield themes[counter]
      counter += 1;
    }
  }

  render() {
    return (
      <themeContext.Provider value={
        {
          theme: this.state,
          changeTheme: this.changeTheme
        }
      }>
        {this.props.children}
      </themeContext.Provider>
    )
  }
}

