import styles from './footer.module.scss';
import classNames from 'classnames';
import { Card, Input, Button } from 'semantic-ui-react';

export interface FooterProps {
    className?: string;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const Footer = ({ className }: FooterProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <p>Join our newsletter:</p>
            <Input
                fluid
                icon="search"
                placeholder="john@wayne.com"
                className={styles.input}
            />
            <Button primary>Submit</Button>
        </div>
    );
};
