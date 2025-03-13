defmodule Backend.Post do
  use Ecto.Schema
  import Ecto.Changeset

  schema "posts" do
    field :title, :string
    field :slug, :string
    field :content, :string
    field :published_at, :utc_datetime
    field :author_id, :string

    timestamps(type: :utc_datetime)
  end

  @doc false
  def changeset(post, attrs) do
    post
    |> cast(attrs, [:title, :slug, :content, :published_at, :author_id])
    |> validate_required([:title, :slug, :content, :published_at, :author_id])
  end
end
