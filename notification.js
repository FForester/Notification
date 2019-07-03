$('body').on('click', '.notificationClose', function()
{
	notificationRemove($(this).attr('data-id'));
});
function notificationCreate(title, body, time, type='error')
{
	if (typeof(notificationID) == 'undefined')
		notificationID = 0;
	var id = notificationID;
	if (!$('.notification').length)
		$('body').append('<div class="notification"></div>');

	$('.notification').prepend('<div class="notificationBlock" data-id="' + notificationID + '"></div>');
	$('.notificationBlock[data-id=' + id + ']').append('<div class="notificationTitle '+ type +'">' + title +'<span class="notificationClose" title="Закрыть" data-id="' + notificationID + '"></span></div>');
	$('.notificationBlock[data-id=' + id + ']').append('<div class="notificationBody '+ type +'">' + body +'</div>');

	setTimeout(notificationRemove, time, notificationID);
	notificationID++;
}
function notificationRemove(id)
{
	$('.notificationBlock[data-id=' + id + ']').fadeOut(400, function () { $(this).remove() });
}