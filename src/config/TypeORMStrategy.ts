import { DefaultNamingStrategy } from 'typeorm';
import { snakeCase } from 'typeorm/util/StringUtils';
import pluralize from 'pluralize';

class TypeOrmNamingStrategy extends DefaultNamingStrategy {
  tableName(className: string, customName: string): string {
    return customName || pluralize(snakeCase(className));
  }

  columnName(
    propertyName: string,
    customName: string,
    embeddedPrefixes: Array<string>
  ): string {
    return (
      snakeCase(embeddedPrefixes.join('_')) +
      (customName || snakeCase(propertyName))
    );
  }

  relationName(propertyName: string): string {
    return snakeCase(propertyName);
  }

  joinColumnName(relationName: string, referencedColumnName: string): string {
    return snakeCase(
      pluralize.singular(relationName) + '_' + referencedColumnName
    );
  }

  joinTableName(
    firstTableName: string,
    secondTableName: string,
    firstPropertyName: string,
    secondPropertyName: string
  ): string {
    return snakeCase(firstTableName + '_' + secondTableName);
  }

  joinTableColumnName(
    tableName: string,
    propertyName: string,
    columnName: string
  ): string {
    return snakeCase(
      pluralize.singular(tableName) + '_' + (columnName || propertyName)
    );
  }

  classTableInheritanceParentColumnName(
    parentTableName: string,
    parentTableIdPropertyName: string
  ): string {
    return snakeCase(
      pluralize.singular(parentTableName) + '_' + parentTableIdPropertyName
    );
  }
}

export default TypeOrmNamingStrategy;
