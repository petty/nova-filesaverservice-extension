const FileSaver = require('./FileSaverService');

exports.activate = function() {
	console.log('FileSaver Activated')
	const fileSaver = new FileSaver()
	nova.workspace.onDidAddTextEditor(editor => {
		return editor.onWillSave(fileSaver.onWillSave.bind(fileSaver))
	})
}
