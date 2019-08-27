import path from 'path'
import os from 'os'

export default {
  defaultConfigPath: path.join(os.homedir(), '.project_switcher_config.json'),
  defaultConfig: () => ({
    apps: []
  }),
  defaultAppConfig: () => ({
    nodeVersion: 'system'
  })
}
