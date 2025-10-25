import './Item.css'

export interface ItemProps {
    title: string;
    description: string;
    done: boolean;
    priority: 'low' | 'normal' | 'high';
}

export function Item ( {title, description, done, priority}: ItemProps) {
  return(
    <div className={done ? 'task done' : 'task'}>
        <p>
            <strong>{title}</strong> 
            {priority === 'high' && <span style={{color: 'red'}}> 🔥 ↑↑</span>}
            {priority === 'low' && <span style={{color: 'blue'}}> 🐢 ↓</span>}
        </p>
        <p>{description}</p>
        <p>Priorita: {priority}</p>
    </div>
    )
}
