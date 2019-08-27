import config from './config/index'
import fs from 'fs'

export default class ProjectSwitcher {
  constructor ({ configPath }) {
    this.configPath = configPath || config.defaultConfigPath
    this.config = this.readConfig()
    console.log(this.config)
  }

  readConfig () {
    try {
      if (fs.stat(this.configPath)) {
        return require(this.configPath)
      }
    } catch (err) {
      const content = config.defaultConfig()
      // fs.writeFileSync(this.)
      return content
    }
  }

  writeConfig () {}

  ls () {}

  add () {}

  delete () {}

  switch () {}
}
