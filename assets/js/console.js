jQuery(function($, undefined) {
	$('#console').terminal(function(command) {
		console.log('command: ' + command)
		if (command.match('.*help.*') !== null) {
			this.echo(
				'Available commands:\n\n' +
				'\tcat       display file contents\n' +
				'\tclear     clear console output\n' +
				'\texit      log out\n' +
				'\thelp      this menu\n' +
				'\tls        list files\n\n' +
				'This console can also run JavaScript.'
			);	
		} else if (command === 'ls') {
			this.echo(
				'total 3\n' +
				'-rw------- cohee cohee .secrets.txt\n' +
				'-rw-r--r-- cohee guest gpg.pub.asc\n' +
				'-rw-r--r-- cohee guest README.txt\n' +
				'-rw-r--r-- cohee guest [[b;green;black]index.html]\n' +
				'lrwxrwxrwx cohee guest [[b;cyan;black]resume] -> [[b;blue;black]cohee.tech/resume/]\n'
			); 
		} else if (command.match('\\s*cat\\s+\.secrets.txt') !== null) {
			this.echo('open: .secrets.txt: [[b;red;black]Permission denied]');
		} else if (command.match('\\s*cat\\s+gpg.pub.asc') !== null) {
			this.echo(`
-----BEGIN PGP PUBLIC KEY BLOCK-----

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
=0eOf
-----END PGP PUBLIC KEY BLOCK-----
			`);
		} else if (command.match('\\s*cat\\s+README.txt') !== null) {
			this.echo("Coming soon!");
		} else if (command.match('\\s*cat\\s+index.html') !== null) {
			window.open('.', '_parent');
		} else if (command.match('\\s*(cat|cd)\\s+resume') !== null) {
			window.open('http://cohee.tech/resume', '_blank');
		} else if (command === '\\s*exit' || command === '\\s*quit') {
			window.open('https://www.google.com/', '_parent');
		} else if (command === '') {
			this.echo('');
		} else {
			try {
				var result = window.eval(command);
				if (result !== undefined) {
					this.echo(new String(result));
				}
			} catch(err) {
				this.echo('[[b;red;black]Uh uh uh, you didn\'t say the magic word:]\n');
				this.error(new String(err));
			}
		}
	}, {
		greetings: 'Connecting... connection established.\n\n' +
			'Logged in as guest.\n\n' +
			'[ Welcome to my Page. Type "[[b;white;black]help]" to begin. ]\n' +
		        '[                                 [[gb;red;black]<3] Ian    ]\n',
		name: 'home_console',
		height: 500,
		prompt: '[[b;white;black]guest][[b;green;black]>] '
	});
});
