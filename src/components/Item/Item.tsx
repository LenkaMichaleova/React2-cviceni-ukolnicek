import './Item.css'

export interface ItemProps {
    title: string;
    description: string;
    done: boolean;
}

export function Item ( {title, description, done}: ItemProps) {
  return(
    <div className={done ? 'task done' : 'task'}>
        <p><strong>{title}</strong></p>
        <p>{description}</p>
    </div>
    )
}
