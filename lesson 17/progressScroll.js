// Progress Scroll
const ProgressScroll = (() => {
	let s;

	return {
		settings() {
			return {
				top: $('.progress-top'),
				right: $('.progress-right'),
				bottom: $('.progress-bottom'),
				left: $('.progress-left'),
				windowHeight: $(window).height(),
				windowWidth: $(window).width(),
				scrollHeight: $(document).height() - $(window).height(),
				progressTotal: $(window).width(),
				scrollPosition: $(document).scrollTop()
			};
		},

		init() {
			s = this.settings();
			this.bindEvents();
		},

		bindEvents() {
			$(window).on('scroll', this.onScroll);
			$(window).on('resize', this.onResize);

			this.progress();
		},

		onScroll() {
			s.scrollPosition = $(document).scrollTop();

			ProgressScroll.requestTick();
		},

		onResize() {
			s.windowHeight = $(window).height();
			s.windowWidth = $(window).width();
			s.scrollHeight = $(document).height() - s.windowHeight;
			s.progressTotal = s.windowHeight * 2 + s.windowWidth * 2;

			ProgressScroll.requestTick();
		},

		requestTick() {
			requestAnimationFrame(this.progress);
		},

		progress() {
			const percentage = s.scrollPosition / s.scrollHeight;
			const width = s.windowWidth / s.progressTotal;
			const height = s.windowHeight / s.progressTotal;

			s.top.css('width', `${(percentage / width) * 100}%`);
			s.right.css('height', `${((percentage - width) / height) * 100}%`);
			s.bottom.css('width', `${((percentage - width - height) / width) * 100}%`);
			s.left.css('height', `${((percentage - width - height - width) / height) * 100}%`);
		}
	};
})();

// Init
$(() => {
	ProgressScroll.init();
});
