
class FileSaverService {
  constructor() {}

  handleSave(currentFile) {

    const NOVASCRIPTS = '/usr/local/bin/novascripts'

    if (nova.fs.stat(NOVASCRIPTS) === undefined || nova.fs.stat(NOVASCRIPTS) === null) {
      console.log(`No ${NOVASCRIPTS} file exists.`)
      return
    }

    var process = new Process(NOVASCRIPTS, {
      args: [currentFile]
    })

    process.start()
  }

  onWillSave(editor) {
    this.handleSave(editor.document.path)
    return
  }
}

module.exports = FileSaverService
