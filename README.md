# react-classlist

A simple class list to use in React projects.

Compatible with TailwindCSS

# Usage

```JS
import { ClassList } from 'react-classlist'

export default function Component() {

  const classes = new ClassList('container whitebg')

  ...

  classes.add('redtext')

  ...

  classes.add('loading', isLoading)

  return (
    <div className={classes}>
      ...
    </div>
  )
}

```

# Installation

`npm i react-classlist`
