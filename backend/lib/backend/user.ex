defmodule Backend.User do
  use Ecto.Schema
  import Ecto.Changeset

  schema "users" do
    field :username, :string
    field :github_id, :string
    field :avatar_url, :string
    field :is_admin, :boolean, default: false

    timestamps(type: :utc_datetime)
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [:github_id, :username, :avatar_url, :is_admin])
    |> validate_required([:github_id, :username, :avatar_url, :is_admin])
  end
end
