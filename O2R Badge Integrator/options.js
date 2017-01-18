function save_options() {
	var executable = document.getElementById('executable').checked;
	var peerreview = document.getElementById('peerreview').checked;
	var licence = document.getElementById('licence').checked;
	var transparent = document.getElementById('transparent').checked;

	chrome.storage.sync.set({
		executableBadge: executable,
		peerreviewBadge: peerreview,
		licenceBadge: licence,
        transparentArticles: transparent
	}, function () {
		// Update status to let user know options were saved.
		var status = document.getElementById('status');
		status.textContent = 'Options saved.';
		setTimeout(function () {
			status.textContent = '';
		}, 750);
	});
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
	// Use default value color = 'red' and likesColor = true.
	chrome.storage.sync.get({
		executableBadge: true,
		peerreviewBadge: true,
		licenceBadge: true,
        transparentArticles: true
	}, function (items) {
		document.getElementById('executable').checked = items.executableBadge;
		document.getElementById('peerreview').checked = items.peerreviewBadge;
		document.getElementById('licence').checked = items.licenceBadge;
		document.getElementById('transparent').checked = items.transparentArticles;
	});
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
		save_options);