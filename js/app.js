// ===== TOAST =====
function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3200);
}

// ===== TASK FILTER =====
function setFilter(cat, el) {
  document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  document.querySelectorAll('.task-card[data-category]').forEach(c => {
    c.style.display = (cat === 'all' || c.dataset.category === cat) ? '' : 'none';
  });
}

// ===== TASK START =====
function startTask(btn, reward) {
  btn.textContent = 'In Progress...';
  btn.disabled = true;
  btn.style.background = '#aaa';
  setTimeout(() => {
    btn.textContent = '✓ Done';
    btn.style.background = '#0a7a4a';
    showToast('🎉 Task completed! +' + reward + ' SOL added to your balance');
  }, 2000);
}

// ===== SEARCH FILTER =====
function filterTasks(query) {
  const q = query.toLowerCase();
  document.querySelectorAll('.task-card').forEach(card => {
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(q) ? '' : 'none';
  });
}

// ===== SIDEBAR CLOSE ON OVERLAY CLICK (mobile) =====
document.addEventListener('click', function(e) {
  const sidebar = document.getElementById('sidebar');
  const toggle = document.querySelector('.menu-toggle');
  if (sidebar && sidebar.classList.contains('open') && !sidebar.contains(e.target) && toggle && !toggle.contains(e.target)) {
    sidebar.classList.remove('open');
  }
});
