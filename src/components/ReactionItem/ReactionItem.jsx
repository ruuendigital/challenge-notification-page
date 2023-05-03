export default function ReactionItem({ notification }) {
  return (
    <li className="notifications__item">
      <img
        src={notification.sourceUser.photo}
        className="notifications__item-image"
        alt="Other user"
      />
      <div className="notifications__item-body">
        <div className="notifications__body-group">
          <span className="notifications__user">
            {notification.sourceUser.name}
          </span>
          <span className="notifications__action">
            has reacted to your {notification.data.content}
          </span>
          <a href={notification.data.url} className="notifications__target">
            {notification.data.title}
          </a>
          {notification.isUnread && (
            <span className="notifications__icon">Unread</span>
          )}
        </div>
        <span className="notifications__timestamp">
          {notification.timestamp}
        </span>
        {/* <div className="notifications__private-message">
      </div> */}
      </div>
    </li>
  );
}