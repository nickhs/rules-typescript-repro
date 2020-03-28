import * as Avatar from 'bazel_rules_typescript/src/avatar/avatar';

export type Props = { size: Avatar.Size }
export function create(props: Props) {
    return Avatar.create(props);
}
