import styles from './new-component.module.scss';
import classNames from 'classnames';

export interface NewComponentProps {
    className?: string;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const NewComponent = ({ className }: NewComponentProps) => {
    return (
        <div className={classNames(styles.root, className)}>New Component</div>
    );
};
