class FileSaverService {
  constructor() {}

  handleSave(currentFile) {
    var process = new Process("/usr/local/bin/novascripts", {
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
